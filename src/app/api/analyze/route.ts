import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    try {
        const { github, leetcode, role } = await req.json();

        const groqKey = process.env.GROQ_API_KEY;
        if (!groqKey) {
            return NextResponse.json({ error: "GROQ_API_KEY is missing" }, { status: 500 });
        }

        const payload = {
            model: "llama-3.3-70b-versatile",
            messages: [
                {
                    role: "system",
                    content: `Act as a ruthless tech recruiter evaluating this candidate. 
Return structured JSON ONLY matching this format perfectly:
{
  "skill_assessment": {"strength_score": 0, "market_match": 0, "saturation_risk": "LOW|MED|HIGH"},
  "weaknesses": ["string"],
  "strength_summary": "string",
  "three_month_roadmap": {
    "month1": [{"title": "string", "desc": "string", "tags": ["string"]}],
    "month2": [{"title": "string", "desc": "string", "tags": ["string"]}],
    "month3": [{"title": "string", "desc": "string", "tags": ["string"]}]
  },
  "project_suggestions": [{"title": "string", "desc": "string", "stack": "string", "effort": "string"}],
  "skill_priority_ranking": [{"name": "string", "status": "CRITICAL|HIGH|MED|EMERGING", "pct": 0}],
  "dsa_topic_analysis": [{"name": "string", "score": 0}],
  "market_demand": [{"skill": "string", "demand_pct": 0, "level": "Strong|Good|Weak|Missing", "roi": "Very High|High|Low|Emerging", "saturation": "Low|Med|High"}]
}`
                },
                {
                    role: "user",
                    content: `Analyze this candidate targeting ${role || 'SWE'} roles.
GitHub Stats: ${JSON.stringify(github)}
LeetCode Stats: ${JSON.stringify(leetcode)}`
                }
            ],
            response_format: { type: "json_object" }
        };

        const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${groqKey}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
        });

        const data = await res.json();
        if (data.error) throw new Error(data.error.message);

        const resultStr = data.choices[0].message.content;
        const parsed = JSON.parse(resultStr);

        return NextResponse.json(parsed);
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

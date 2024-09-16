import OpenAI from 'openai'

export default class OpenAIService {
  private openai: OpenAI

  constructor() {
    this.openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY, // Masukkan API key langsung ke konstruktor
    })
  }

  public async generateText(prompt: string) {
    const response = await this.openai.chat.completions.create({
      model: 'gpt-4o-mini', // Sesuaikan dengan model yang ingin kamu pakai
      messages: [
        { role: 'system', content: 'Identitas mu adalah ITHO AI, Jawab semua pertanyaan dalam bahasa indonesia'},
        { role: 'user', content: prompt }
      ],
      max_tokens: 100,
      temperature: 0.5
    })
    // console.log(response )
      // return response.choices[0].message.content
      
    return response
  }
}

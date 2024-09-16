import type { HttpContext } from '@adonisjs/core/http'
import OpenAIService from '#services/open_ai_service'

export default class OpenAisController {
    public async generate({ request, response }: HttpContext) {
        const prompt = request.input('prompt')
    
        const openAIService = new OpenAIService()
        const result = await openAIService.generateText(prompt)
    
        return response.json( result)
        // return response.json({ result })
      }
}

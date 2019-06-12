package world.braveart.slack.customerservice

import com.fasterxml.jackson.module.kotlin.jacksonObjectMapper
import io.ktor.client.HttpClient
import io.ktor.client.request.post
import world.braveart.slack.webhook.WebHook


object SlackCustomerServiceChannelMessaging {

    private val client by lazy {
        HttpClient()
    }

    suspend fun sendMessageToCustomerServiceChannel(httpClient: HttpClient = client, webHook: WebHook) {

        client.post<String>(SlackProps[SlackProps.AxeCostumerService.webhook].toURL()){

            body = jacksonObjectMapper().writeValueAsString(webHook)
        }
    }
}


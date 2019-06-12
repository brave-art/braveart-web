package world.braveart.slack.customerservice

import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.runBlocking
import org.junit.jupiter.api.Test
import world.braveart.slack.webhook.WebHookTest
import world.braveart.slack.webhook.WebHookTest.Companion.exampleWebhookObject
import kotlin.test.Ignore


class SlackCustomerServiceChannelMessagingTest {

    @Test @Ignore
    fun sendMessageToCustomerServiceChannel() {

        runBlocking {
            SlackCustomerServiceChannelMessaging
                    .sendMessageToCustomerServiceChannel(webHook = WebHookTest.exampleWebhookObject)
        }
    }

}

package world.braveart.slack.customerservice

import org.junit.jupiter.api.Test
import java.net.URI

internal class SlackPropsTest {

    @Test
    fun testAxeCustomerServiceWebhookPropFromSystemProperties() {

        val testValue = URI("https://hooks.slack.com/services/myTestUri")

        System.setProperty("SlackProps.AxeCostumerService.webhook",testValue.toString())

        kotlin.test.assertEquals(
                expected = testValue,
                actual = SlackProps[SlackProps.AxeCostumerService.webhook]
        )

    }

    @Test
    fun testAxeCustomerServiceWebhookPropFromPropertiesFile() {

        val testValue = URI("https://hooks.slack.com/services/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")

        System.setProperty("SlackProps.AxeCostumerService.webhook",testValue.toString())

        kotlin.test.assertEquals(
                expected = testValue,
                actual = SlackProps[SlackProps.AxeCostumerService.webhook]
        )

    }
}
package world.braveart.slack.webhook

import com.fasterxml.jackson.module.kotlin.jacksonObjectMapper
import org.junit.jupiter.api.Test


class WebHookTest {

    companion object {
        val exampleWebhookObject = WebHook(
                text = "some text",
                attachments = arrayOf(
                        Attachment(
                                fallback = "Required plain-text summary of the attachment.",
                                color = "",
                                pretext = "Optional text that appears above the attachment block",
                                author_name = "Bobby Tables",
                                author_link = "http://flickr.com/bobby/",
                                author_icon = "http://flickr.com/icons/bobby.jpg",
                                title = "Slack API Documentation",
                                title_link = "https://api.slack.com/",
                                text = "Optional text that appears within the attachment",
                                fields = arrayOf(
                                        Fields(
                                                title = "Priority",
                                                value = "High",
                                                short = false
                                        )
                                ),
                                image_url = "http://my-website.com/path/to/image.jpg",
                                thumb_url = "http://example.com/path/to/thumb.png",
                                footer = "Slack API",
                                footer_icon = "https://platform.slack-edge.com/img/default_application_icon.png",
                                ts = 123456789
                        )
                )
        )
    }


    @Test
    fun testGetJson() {

        jacksonObjectMapper().writeValueAsString(exampleWebhookObject)

//        assertEquals(JSONObject(exampleWebhook),
//           jacksonObjectMapper().writeValueAsString(exampleWebhookObject)))
    }
}

//Sample attachment
const val exampleWebhook = """
    {
    "text": "some text",
    "attachments": [
        {
            "fallback": "Required plain-text summary of the attachment.",
            "color": "",
            "pretext": "Optional text that appears above the attachment block",
            "author_name": "Bobby Tables",
            "author_link": "http://flickr.com/bobby/",
            "author_icon": "http://flickr.com/icons/bobby.jpg",
            "title": "Slack API Documentation",
            "title_link": "https://api.slack.com/",
            "text": "Optional text that appears within the attachment",
            "fields": [
                {
                    "title": "Priority",
                    "value": "High",
                    "short": false
                }
            ],
            "image_url": "http://my-website.com/path/to/image.jpg",
            "thumb_url": "http://example.com/path/to/thumb.png",
            "footer": "Slack API",
            "footer_icon": "https://platform.slack-edge.com/img/default_application_icon.png",
            "ts": 123456789
        }
    ]
}
"""

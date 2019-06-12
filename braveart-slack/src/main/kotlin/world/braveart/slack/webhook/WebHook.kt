package world.braveart.slack.webhook

import world.braveart.common.content.BraveArtColors

class WebHook(
        val text: String,
        val attachments: Array<Attachment>
) {

    companion object {
        fun formatLink(url:String,displayText:String?) = "<$url|$displayText>"
    }
}

class Attachment (
        val title: String,
        val title_link: String?,
        val fallback: String,
        val text: String,
        val color: String? = BraveArtColors.DefaultPrimaryColor.color,
        val pretext: String? = null,
        val author_name: String? = null,
        val author_link: String? = null,
        val author_icon: String? = null,
        val image_url: String? = null,
        val thumb_url: String? = null,
        val footer: String?,
        val footer_icon: String? = null,
        val fields: Array<Fields>?,
        val ts: Long
        )

class Fields (
        val title: String,
        val value: String,
        val short: Boolean
)
package world.braveart.slack.customerservice

import khttp.delete

object SlackSimpleCustomerServiceMessage {

    fun sendMessageToCustomerServiceChannel() {
        khttp.post(
                url = "http://httpbin.org/post",
                json = mapOf("key1" to "value1", "keyn" to "valuen"))
    }

}
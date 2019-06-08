package world.braveart.aws.forms.contact

//world.braveart.aws.forms.contact.PostContactLambdaService::handler

import com.amazonaws.services.lambda.runtime.Context
import com.amazonaws.services.lambda.runtime.RequestHandler
import com.fasterxml.jackson.annotation.JsonIgnoreProperties
import java.io.*
import com.fasterxml.jackson.module.kotlin.*

@JsonIgnoreProperties(ignoreUnknown = true)
data class HandlerInput(
        val contactName: String ="",
        val contactEmail: String ="",
        val contactMessage: String = ""
)

data class HandlerOutput(val message: String)

class PostContactLambdaService : RequestHandler<Any, Any> {

    override fun handleRequest(p0: Any?, p1: Context?): Any {
        TODO("not implemented") //To change body of created functions use File | Settings | File Templates.
    }

    val mapper = jacksonObjectMapper()

    fun handler(input: InputStream, output: OutputStream = ByteArrayOutputStream()): Unit {

        val inputObj = mapper.readValue<HandlerInput>(input)
        mapper.writeValue(output, HandlerOutput(
                """...Echo... Hello ${inputObj.contactName},
                    |We will contact you by email at: ${inputObj.contactEmail} in regards to your message:
                    |${inputObj.contactMessage}
                """.trimMargin()))
    }
}

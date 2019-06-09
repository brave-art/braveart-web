package world.braveart.aws.forms.contact

import org.apache.commons.io.IOUtils

import org.junit.jupiter.api.Test
import org.junit.jupiter.api.TestInstance
import java.io.ByteArrayOutputStream

@TestInstance(TestInstance.Lifecycle.PER_CLASS)
class PostContactLambdaServiceTest {

    val testService = PostContactLambdaService();

    val encoding = "UTF-8"

    @Test
    fun testUnknownClassesDoNotCauseFailure() {

        val out = ByteArrayOutputStream();

        testService.handler(input = IOUtils.toInputStream(
                "{" +
                "  \"key1\": \"value1\",\n" +
                "  \"key2\": \"value2\",\n" +
                "  \"key3\": \"value3\"\n" +
                "}",encoding),
                output = out
                )

        print(out)
    }
}
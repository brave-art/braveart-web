package world.braveart.aws.common.http

/**
 * POJO containing response object for API Gateway.
 */
data class GatewayResponse(val body: String,
                      val headers: Map<String, String> = HashMap(),
                      val statusCode: Int) {
}

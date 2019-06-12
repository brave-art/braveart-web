package world.braveart.trello.boards.snapshots

import com.fasterxml.jackson.databind.DeserializationFeature
import com.fasterxml.jackson.module.kotlin.jacksonObjectMapper
import com.fasterxml.jackson.module.kotlin.readValue
import io.swagger.client.models.Boards
import io.swagger.client.models.Lists

//https://api.trello.com/1/boards/5cfb3323accda45f23589d6f/lists?key=???&token=???
//private const val JSON_SNAP: String =  """{
//"id": "5cfb3323accda45f23589d6f",
//"name": "Customer Service",
//"desc": "",
//"descData": null,
//"closed": false,
//"idOrganization": "5c80de79fc2bde1c32e2d75a",
//"pinned": false,
//"url": "https://trello.com/b/5GCOL8tr/customer-service",
//"shortUrl": "https://trello.com/b/5GCOL8tr",
//
//"labelNames": {
//    "green": "",
//    "yellow": "",
//    "orange": "",
//    "red": "",
//    "purple": "",
//    "blue": "",
//    "sky": "",
//    "lime": "",
//    "pink": "",
//    "black": ""
//},
//"lists": [
//{
//    "id": "5cfb33a751ec3f3d0020ff12",
//    "name": "Incoming",
//    "closed": false,
//    "idBoard": "5cfb3323accda45f23589d6f",
//    "pos": 65535,
//    "subscribed": false,
//    "softLimit": null
//},
//{
//    "id": "5cfb33c9a81a0a6855b46bcf",
//    "name": "In progress",
//    "closed": false,
//    "idBoard": "5cfb3323accda45f23589d6f",
//    "pos": 131071,
//    "subscribed": false,
//    "softLimit": null
//},
//{
//    "id": "5cfb33d535e2de18e8cd2939",
//    "name": "On Hold",
//    "closed": false,
//    "idBoard": "5cfb3323accda45f23589d6f",
//    "pos": 196607,
//    "subscribed": false,
//    "softLimit": null
//},
//{
//    "id": "5cfb33d9f3220109f8dec741",
//    "name": "Complete/Review",
//    "closed": false,
//    "idBoard": "5cfb3323accda45f23589d6f",
//    "pos": 262143,
//    "subscribed": false,
//    "softLimit": null
//}
//]
//}
//"""
//
//internal object AxeCustomerServiceBoard {
//
//    private val mapper = jacksonObjectMapper()
//            .configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false)
//
//    val board: Boards = mapper.readValue<Boards>(JSON_SNAP)
//
//    fun getListByName(name:String) :Lists? {
//        board.lists?.forEach {
//            if (it.name?.toUpperCase()
//                            .equals(name.toUpperCase())) {
//                return it
//            }
//        }
//
//        return null
//    }
//}



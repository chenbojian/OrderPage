using System;
using System.IO;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;
using Newtonsoft.Json;

namespace OrderPage.Controllers
{
    public class FoodListController : ApiController
    {
        public HttpResponseMessage GetFoodList()
        {
            var path = HttpContext.Current.Server.MapPath("/data/food-list.json");
            var foodList= JsonConvert.DeserializeObject(File.ReadAllText(path));
            return Request.CreateResponse(HttpStatusCode.OK,foodList);
        }
    }

    public class Food
    {
        
    }
}
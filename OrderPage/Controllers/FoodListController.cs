using System;
using System.Collections.Generic;
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
            var foodList= JsonConvert.DeserializeObject<Food[]>(File.ReadAllText(path));
            return Request.CreateResponse(HttpStatusCode.OK,foodList);
        }
    }

    public class Food
    {
        public string Name { get; set; }
        public double Price { get; set; }
        public string Pic { get; set; }
        public string Id { get; set; }
    }
}
using System;
using System.Net;
using System.Linq;
using Xunit;
using Xunit.Abstractions;

namespace test
{
    public class OrderPageApiTest : TestBase
    {
        private readonly ITestOutputHelper output;

        public OrderPageApiTest(ITestOutputHelper output)
        {
            this.output = output;
        }
        [Fact]
        public void ShouldReturnOk()
        {
            Get("api/cbj");
            output.WriteLine("-----------------");
            output.WriteLine(Server.BaseAddress.ToString());
            Assert.Equal(HttpStatusCode.OK, Response.StatusCode);
        }

        [Fact]
        public void ShouldReturnAllProducts()
        {
            Get("api/foodlist");

            var products = Body(new[]
            {
                new
                {
                    Name = default(string)
                
                }
            });

            Assert.Equal(1, products.Count());
            Assert.Equal("Subway", products[0].Name);
        }
    }
}
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;

namespace test
{
    class Program
    {
        static void Main(string[] args)
        {


            string json = @"['Starcraft','Halo','Legend of Zelda']";

            string[] videogames = JsonConvert.DeserializeObject<string[]>(json);

            Console.WriteLine(string.Join(", ", videogames));
            Console.Read();
        }
    }
}

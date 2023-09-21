using LaptopStore.Model;
using Newtonsoft.Json;

namespace LaptopStore.StaticData
{
    public class ListLaptop
    {

        public List<Laptop> GetLaptops()
        {
            try
            {
                string jsonData = File.ReadAllText(@"./StaticData/data.json");
                var laptopData = JsonConvert.DeserializeObject<List<Laptop>>(jsonData);
                return laptopData;
            }
            catch (FileNotFoundException)
            {
                return new List<Laptop>();
            }
            catch (JsonException)
            {
                return new List<Laptop>();
            }
        }
    }
}

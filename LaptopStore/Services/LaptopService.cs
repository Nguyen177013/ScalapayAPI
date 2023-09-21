using LaptopStore.Model;
using LaptopStore.StaticData;

namespace LaptopStore.Services
{
    public class LaptopService : ILaptopService
    {
        private ListLaptop laptops = new ListLaptop();
        public Laptop GetLaptop(int id)
        {
            Laptop laptop = this.GetLaptops().Where(l => l.Id == id).FirstOrDefault();
            if (laptop == null)
            {
                return null;
            }
            return laptop;
        }

        public List<Laptop> GetLaptops()
        {
            return laptops.GetLaptops();
        }

        public bool UpdateLaptop(int id)
        {
            throw new NotImplementedException();
        }
    }
}

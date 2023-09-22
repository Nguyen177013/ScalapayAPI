using LaptopStore.Model;
using LaptopStore.StaticData;

namespace LaptopStore.Services
{
    public class LaptopService : ILaptopService
    {
        private static ListLaptop laptopData = new ListLaptop();
        private static List<Laptop> _laptops = laptopData.GetLaptops();
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
            return _laptops;
        }

        public bool UpdateLaptop(List<Laptop> laptopsAfter)
        {
            foreach (var item in laptopsAfter)
            {
                Laptop laptop = GetLaptop(item.Id);
                if (laptop == null)
                {
                    return false;
                }
                laptop.Instock = item.Instock;
            }
            return true;
        }
    }
}

using LaptopStore.Model;

namespace LaptopStore.Services
{
    public interface ILaptopService
    {
        List<Laptop> GetLaptops();
        Laptop GetLaptop(int id);
        bool UpdateLaptop(List<Laptop> laptop);
    }
}

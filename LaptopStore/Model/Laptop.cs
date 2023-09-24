namespace LaptopStore.Model
{
    public class Laptop
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public int Price { get; set; }
        public int Instock { get; set; }
        public List<string> DetailImages { get; set; }
        public string CPU { get; set; }
        public string Memory { get; set; }
        public string SSD { get; set; }
        public string VGA { get; set; }
    }
}

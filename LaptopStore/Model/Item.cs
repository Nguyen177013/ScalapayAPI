namespace LaptopStore.Model
{
    public class Item
    {
        public string gtin { get; set; }
        public int quantity { get; set; }
        public string name { get; set; }
        public string category { get; set; }
        public string sku { get; set; }
        public TotalAmount price { get; set; }
        public string imageUrl { get; set; }
    }
}

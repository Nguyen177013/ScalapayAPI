namespace LaptopStore.Model
{
    public class ScalapayAPI
    {
        public TotalAmount totalAmount { get; set; }
        public Consumer consumer { get; set; }
        public Shipping shipping { get; set; }
        public List<Item> items { get; set; }
        public Merchant merchant { get; set; }
    }
}

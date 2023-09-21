using LaptopStore.Model;
using LaptopStore.Services;
using Microsoft.AspNetCore.Mvc;

namespace LaptopStore.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LaptopController : ControllerBase
    {
        private readonly ILaptopService _laptopService;

        public LaptopController(ILaptopService laptopService)
        {
            this._laptopService = laptopService;
        }

        [HttpGet]
        [ProducesResponseType(200, Type = typeof(List<Laptop>))]
        public IActionResult GetLaptops()
        {
            var laptops = _laptopService.GetLaptops();
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            return Ok(laptops);
        }

        [HttpGet("{laptopId}")]
        [ProducesResponseType(200, Type = typeof(Laptop))]
        public IActionResult GetLaptop(int laptopId)
        {
            var laptop = _laptopService.GetLaptop(laptopId);
            if (laptop == null)
            {
                return NotFound();
            }

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            return Ok(laptop);
        }
    }
}

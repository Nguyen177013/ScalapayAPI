using LaptopStore.Model;
using LaptopStore.Services;
using Microsoft.AspNetCore.Mvc;
using RestSharp;


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

        [HttpPost]
        [ProducesResponseType(204)]
        public IActionResult UpdateLaptop([FromBody] List<Laptop> updateLaptops)
        {
            if (updateLaptops == null)
            {
                return NoContent();
            }
            var updatedLaptops = _laptopService.UpdateLaptop(updateLaptops);
            if (!updatedLaptops)
            {
                ModelState.AddModelError("","Something wrong when updating laptop");
                return StatusCode(500, ModelState);
            }
            return NoContent();
        }
        [HttpPost("redirect")]
        public async Task<IActionResult> YourHttpGetMethod([FromBody] string jsonData)
        {
            try
            {
                var options = new RestClientOptions("https://integration.api.scalapay.com/v2/orders");
                var client = new RestClient(options);
                var request = new RestRequest("");
                request.AddHeader("accept", "application/json");
                request.AddHeader("Authorization", "Bearer qhtfs87hjnc12kkos");
                request.AddJsonBody(jsonData, false);
                var response = await client.PostAsync(request);

                // You can handle the response here
                if (response.IsSuccessful)
                {
                    var responseBody = response.Content;
                    return Ok(responseBody);
                }
                else
                {
                    var errorMessage = response.ErrorMessage;
                    return BadRequest(errorMessage);
                }
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

    }
}

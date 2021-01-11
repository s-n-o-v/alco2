namespace alco_backend.Controllers
{
    using System;
    using System.Collections.Generic;
    using System.Threading.Tasks;
    using alco_data.Interfaces;
    using alco_model.Dto.Drink;
    using alco_model.Models;
    using AutoMapper;
    using Microsoft.AspNetCore.Mvc;

    [Route("api/drinks")]
    public class DrinkController : ControllerBase
    {
        IDrinkRepo _repo;
        public IMapper _mapper { get; }

        public DrinkController(IDrinkRepo repo, IMapper mapper)
        {
            _repo = repo;
            _mapper = mapper;
        }

        [HttpGet]  // GET: api/drinks
        public async Task<ActionResult<IEnumerable<Drink>>> GetDrinks(int index = 0, int pageSize = 10, int? categoryId = null, string name = null, string description = null)
        {
            return Ok(await _repo.GetDrinks(index, pageSize, categoryId, name, description));
        }

        [HttpPost]  // POST: api/drinks
        public async Task<ActionResult> CreateDrink([FromBody] DrinkCreate drink)
        {
            if (drink == null || string.IsNullOrEmpty(drink.Name))
            {
                return StatusCode(400);
            }
            try
            {
                var item = _mapper.Map<Drink>(drink);

                await _repo.Create(item);
                return Ok();
            }
            catch
            {
                return StatusCode(400);
            }
        }

        [HttpGet("{id}")]  // GET: api/drinks/{id}
        public async Task<ActionResult<Drink>> GetDrinkById(int id)
        {
            var item = await _repo.GetItemById(id);
            if (item != null) return Ok(item);

            return NotFound();
        }

        [HttpPut("{id}"), HttpPost("{id}")] // POST, PUT: api/drinks/{id}
        public async Task<ActionResult> UpdateComment(int id, [FromBody] Drink drink)
        {
            var item = await _repo.GetItemById(id);
            if (item == null) return NotFound();
            await _repo.Update(drink);
            return Ok();
        }

        [HttpDelete("{id}")]  // DELETE: api/drinks/{id}
        public async Task<ActionResult> DeleteDrink(int id)
        {
            var item = await _repo.GetItemById(id);
            if (item == null) return NotFound();
            await _repo.Delete(item);
            return Ok();
        }

    }
}

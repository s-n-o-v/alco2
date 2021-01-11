namespace alco_backend.Controllers
{
    using System.Collections.Generic;
    using System.Threading.Tasks;
    using alco_data.Interfaces;
    using alco_model.Dto.Category;
    using alco_model.Models;
    using AutoMapper;
    using Microsoft.AspNetCore.Mvc;

    [Route("api/category")]
    public class CategoryController : ControllerBase
    {
        ICategoryRepo _repo;
        public IMapper _mapper { get; }

        public CategoryController(ICategoryRepo repo, IMapper mapper)
        {
            _repo = repo;
            _mapper = mapper;
        }
        
        [HttpGet]  // GET: api/category
        public async Task<ActionResult<IEnumerable<Category>>> GetCategories(string name, int? parentId)
        {
            if (parentId.HasValue)
            {
                return Ok(await _repo.GetCategoriesByParentId(parentId.Value));
            }

            return Ok(await _repo.GetCategoriesByName(name));
        }
        
        [HttpPost]  // POST: api/category
        public async Task<ActionResult> CreateCategory([FromBody] CategoryCreate category)
        {
            if (category == null || string.IsNullOrEmpty(category.Name))
            {
                return StatusCode(400);
            }
            try
            {
                var item = _mapper.Map<Category>(category);

                await _repo.Create(item);
                return Ok();
            }
            catch
            {
                return StatusCode(400);
            }
        }
        
        [HttpGet("{id}")]  // GET: api/category/{id}
        public async Task<ActionResult<Category>> GetCategoryById(int id)
        {
            var item =  await _repo.GetItemById(id);
            if (item != null) return Ok(item);

            return NotFound();
        }

        [HttpPut("{id}"), HttpPost("{id}")] // POST, PUT: api/category/{id}
        public async Task<ActionResult> UpdateCategory(int id, [FromBody] Category category)
        {
            var item = await _repo.GetItemById(id);
            if (item == null) return NotFound();
            await _repo.Update(category);
            return Ok();
        }
        
        [HttpDelete("{id}")]  // DELETE: api/category/{id}
        public async Task<ActionResult> DeleteCategory(int id)
        {
            var item = await _repo.GetItemById(id);
            if (item == null) return NotFound();
            await _repo.Delete(item);
            return Ok();
        }

    }
}

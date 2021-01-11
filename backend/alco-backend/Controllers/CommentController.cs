namespace alco_backend.Controllers
{
    using System;
    using System.Collections.Generic;
    using System.Threading.Tasks;
    using alco_data.Interfaces;
    using alco_model.Dto.Comment;
    using alco_model.Models;
    using AutoMapper;
    using Microsoft.AspNetCore.Mvc;

    [Route("api/comments")]
    public class CommentController : ControllerBase
    {
        ICommentRepo _repo;
        public IMapper _mapper { get; }

        public CommentController(ICommentRepo repo, IMapper mapper)
        {
            _repo = repo;
            _mapper = mapper;
        }

        [HttpGet]  // GET: api/comments
        public async Task<ActionResult<IEnumerable<Comment>>> GetComments(int index = 0, int pageSize = 10, int? drinkId = null, int? rate = null, int? userId = null, string text = null, DateTime? commentDate = null)
        {
            return Ok(await _repo.GetComments(index, pageSize, drinkId, rate, userId, text, commentDate));
        }

        [HttpPost]  // POST: api/comments
        public async Task<ActionResult> CreateComment([FromBody] CommentCreate comment)
        {
            if (comment == null || string.IsNullOrEmpty(comment.CommentText))
            {
                return StatusCode(400);
            }
            try
            {
                var item = _mapper.Map<Comment>(comment);

                await _repo.Create(item);
                return Ok();
            }
            catch
            {
                return StatusCode(400);
            }
        }

        [HttpGet("{id}")]  // GET: api/comments/{id}
        public async Task<ActionResult<Comment>> GetCommentById(int id)
        {
            var item = await _repo.GetItemById(id);
            if (item != null) return Ok(item);

            return NotFound();
        }

        [HttpPut("{id}"), HttpPost("{id}")] // POST, PUT: api/comments/{id}
        public async Task<ActionResult> UpdateComment(int id, [FromBody] Comment comment)
        {
            var item = await _repo.GetItemById(id);
            if (item == null) return NotFound();
            await _repo.Update(comment);
            return Ok();
        }

        [HttpDelete("{id}")]  // DELETE: api/comments/{id}
        public async Task<ActionResult> DeleteComment(int id)
        {
            var item = await _repo.GetItemById(id);
            if (item == null) return NotFound();
            await _repo.Delete(item);
            return Ok();
        }

    }
}

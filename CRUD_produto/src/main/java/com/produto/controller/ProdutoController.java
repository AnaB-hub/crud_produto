package com.produto.controller;

import java.util.List;
import java.util.stream.Stream;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.produto.entities.Produto;
import com.produto.entities.dto.ProdutoDTO;
import com.produto.entities.mapper.ProdutoMapper;
import com.produto.repository.ProdutoRepository;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;

@RestController
@RequestMapping(value="/produtos")
@Api(value = "API CRUD de Produtos")
@CrossOrigin(origins = "*")
public class ProdutoController {
	
	@Autowired
	ProdutoRepository produtoRepository;
	
	@Autowired
	private ProdutoMapper mapper;
	
	@GetMapping
	@ApiOperation(value="Lista de todos os produtos")
	public List<Produto> produtos() {
		return produtoRepository.findAll();
	}
	
	@GetMapping("/ativos")
	@ApiOperation(value="Lista de todos os produtos ativos")
	public Stream<Produto> produtosAtivos() {
		List<Produto> produtos = produtoRepository.findAll();
		return produtos.stream().filter(p -> p.isAtivos() == true);
	}
	
	@GetMapping("/{id}")
	@ApiOperation(value="Lista produto por ID")
	public Produto produto(@PathVariable(value="id") int id) {
		return produtoRepository.findById(id);
	}
	
	@PostMapping
	@ApiOperation(value="Salva produto")
	public Produto saveProduto(@RequestBody ProdutoDTO dto) {
		Produto prod = mapper.setProdutoDTOTOProduto(dto);
		prod.setAtivos(true);
		return produtoRepository.save(prod);
	}
	
	@PutMapping("/{id}")
	@ApiOperation(value="Altera produto usando ID")
	public Produto updateProduto(@RequestBody Produto produto, @PathVariable(value="id") int id) {
		produto.setId(id);
		return produtoRepository.save(produto);
	}
	
	@GetMapping("/delete/{id}")
	@ApiOperation(value="Exclusão lógica de produto")
	public void logicalExclusionProduto(@PathVariable(value="id") int id) {
		Produto produto = produtoRepository.findById(id);
		produto.setAtivos(false);
		produtoRepository.save(produto);
	}

}

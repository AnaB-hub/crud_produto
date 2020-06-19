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
	
	@GetMapping
	@ApiOperation(value="Lista de todos os produtos")
	private List<Produto> produtos() {
		return produtoRepository.findAll();
	}
	
	@GetMapping("/ativos")
	@ApiOperation(value="Lista de todos os produtos ativos")
	private Stream<Produto> produtosAtivos() {
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
	private Produto saveProduto(@RequestBody Produto produto) {
		produto.setAtivos(true);
		return produtoRepository.save(produto);
	}
	
	@PutMapping()
	@ApiOperation(value="Altera produto")
	private Produto updateProduto(@RequestBody Produto produto) {
		return produtoRepository.save(produto);
	}
	
	@GetMapping("/delete/{id}")
	@ApiOperation(value="Exclusão lógica de produto")
	private void logicalExclusionProduto(@PathVariable(value="id") int id) {
		Produto produto = produtoRepository.findById(id);
		produto.setAtivos(false);
		produtoRepository.save(produto);
	}

}

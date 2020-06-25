package com.produto.controller;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;
import java.util.stream.Stream;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
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
@RequestMapping(value = "/produtos")
@Api(value = "API CRUD de Produtos")
@CrossOrigin(origins = "*")
public class ProdutoController {

	@Autowired
	ProdutoRepository produtoRepository;

	@Autowired
	private ProdutoMapper mapper;

	@GetMapping
	@ApiOperation(value = "Lista de todos os produtos")
	public List<Produto> produtos() {
		return produtoRepository.findAll();
	}

	@GetMapping("/ativos")
	@ApiOperation(value = "Lista de todos os produtos ativos")
	public Stream<Produto> produtosAtivos() {
		List<Produto> produtos = produtoRepository.findAll();
		return produtos.stream().filter(p -> p.isAtivos() == true);
	}

	@GetMapping("/{id}")
	@ApiOperation(value = "Lista produto por ID")
	public Produto produto(@PathVariable(value = "id") int id) {
		return produtoRepository.findById(id);
	}

	@PostMapping
	@ApiOperation(value = "Salva produto")
	public ResponseEntity<Produto> saveProduto(@RequestBody ProdutoDTO dto) throws URISyntaxException {
		Produto prod = mapper.setProdutoDTOTOProduto(dto);
		prod.setAtivos(true);
		produtoRepository.save(prod);
		return ResponseEntity.created(new URI(("/produtos/salvar/" + prod.getNome()))).body(prod);
	}

	@PutMapping("/{id}")
	@ApiOperation(value = "Altera produto usando ID")
	public Produto updateProduto(@RequestBody Produto produto, @PathVariable(value = "id") int id) {
		produto.setId(id);
		return produtoRepository.save(produto);
	}

	@GetMapping("/delete/{id}")
	@ApiOperation(value = "Exclusão lógica de produto")
	public void logicalExclusionProduto(@PathVariable(value = "id") int id) {
		Produto produto = produtoRepository.findById(id);
		if (produto != null) {
			produto.setAtivos(false);
			produtoRepository.save(produto);			
		}
	}
	
//	public void map() {
		// Exemplo 1
//		Map<Integer, String> mapaNomes = new HashMap<Integer, String>();
//		mapaNomes.put(1, "João Delfino");
//		mapaNomes.put(2, "Maria do Carmo");
//		mapaNomes.put(3, "Claudinei Silva");
//		Set<Entry<Integer, String>> set = mapaNomes.entrySet();
//		Iterator<?> it = set.iterator();
//		while (it.hasNext()) {
//			Entry<Integer, String> entry = (Entry<Integer, String>) it.next();
//			System.out.println(entry.getKey() + "\t\t" + entry.getValue());
//		}
		// Exemplo 2
//		Map<String, String> example = new HashMap<String, String>();
//		example.put("K1", new String("V1"));
//		example.put("K2", new String("V2"));
//		example.put("K3", new String("V3"));
//		example.put("K4", new String("V4"));
//		example.put("K5", new String("V5"));
//
//		String keyToSearch = "K1";
//		String valueToSearch = "V3";
//
//		if (example.containsKey(keyToSearch)) {
//			System.out.println("Valor da Chave " + keyToSearch + " = " + example.get(keyToSearch));
//		} else {
//			System.err.println("Chave não existe");
//		}
//		
//		if(example.containsValue(valueToSearch)) {
//			System.out.println("Chave: " + valueToSearch);
//		} else {
//			System.err.println("Chave não existe");
//		}
		
		//Exemplo 3
		// Creating an empty HashMap 
//        HashMap<Integer, String> hash_map = new HashMap<Integer, String>(); 
//  
//        // Mapping string values to int keys 
//        hash_map.put(10, "Geeks"); 
//        hash_map.put(15, "4"); 
//        hash_map.put(20, "Geeks"); 
//        hash_map.put(25, "Welcomes"); 
//        hash_map.put(30, "You"); 
//  
//        // Displaying the HashMap 
//        System.out.println("Initial Mappings are: " + hash_map); 
//  
//        // Getting the value of 25 
//        System.out.println("The Value is: " + hash_map.get(25)); 
//  
//        // Getting the value of 10 
//        System.out.println("The Value is: " + hash_map.get(10)); 
//	}

}

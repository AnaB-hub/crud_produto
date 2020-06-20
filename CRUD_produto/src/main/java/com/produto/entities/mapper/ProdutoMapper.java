package com.produto.entities.mapper;

import org.springframework.stereotype.Service;

import com.produto.entities.Produto;
import com.produto.entities.dto.ProdutoDTO;

@Service
public class ProdutoMapper {
	
	public Produto setProdutoDTOTOProduto (ProdutoDTO dto) {
		Produto curso = new Produto(dto.getId(), dto.getNome(), dto.getQtde(), dto.getValidade());
		return curso;
	}

}
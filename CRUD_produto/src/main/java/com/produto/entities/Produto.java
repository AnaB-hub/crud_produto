package com.produto.entities;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "produto")
@Getter
@Setter
public class Produto implements Serializable {

	public Produto(Integer id, String nome, Integer qtde, Date validade) {
		this.id = id;
		this.nome = nome;
		this.qtde = qtde;
		this.validade = validade;
	}

	public Produto() {
		super();
	}

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer id;

	private String nome;

	private Integer qtde;

	private Date validade;

	private boolean ativos;

}

import React from 'react'
import PageHeader from '../template/pageHeader'

export default function about() {
    return (
        <div>
            <PageHeader name="Sobre" small="Informações" />
            <p>
            O que é uma <i>Todo List</i> ? A definição é simples. É uma lista de tarefas que você precisa concluir ou coisas que deseja fazer. Normalmente, eles são organizados em ordem de prioridade. Tradicionalmente, eles são escritos em um pedaço de papel ou post-it e atuam como um auxiliar de memória.
            </p>
            <p className="text-muted">
                Esta aplicação foi desenvolvida como forma de avaliação técnica e também para aprimorar meus conhecimentos em Desenvolvimento Web. 
            </p>
            <p>
                <span className="h5 font-weight-bold">Nas redes:</span>
                <ul>
                    <li>
                        <i className="fa fa-github"></i> 
                        <span className="text-primary"> alanctnk</span>
                    </li>
                    <li>
                        <i className="fa fa-linkedin text-info"></i> 
                        <span className="text-primary"> alan8819</span>
                    </li>
                </ul>
            </p>
        </div>
    )
}

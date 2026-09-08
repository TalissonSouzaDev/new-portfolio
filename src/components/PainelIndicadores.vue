<script setup>
import { ref, onMounted } from 'vue'
import { indicadores } from '../data/perfil.js'

const valores = ref(indicadores.map(() => 0))

function formatar(n) {
  return new Intl.NumberFormat('pt-BR').format(Math.round(n))
}

onMounted(() => {
  const reduzir = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (reduzir) {
    valores.value = indicadores.map((i) => i.valor)
    return
  }
  const inicio = performance.now()
  const duracao = 1100

  function passo(agora) {
    const t = Math.min((agora - inicio) / duracao, 1)
    const suave = 1 - Math.pow(1 - t, 3)
    valores.value = indicadores.map((i) => i.valor * suave)
    if (t < 1) requestAnimationFrame(passo)
  }
  requestAnimationFrame(passo)
})
</script>

<template>
  <ul class="painel">
    <li v-for="(item, i) in indicadores" :key="item.rotulo" class="celula">
      <span class="numero">
        {{ formatar(valores[i]) }}<span class="sufixo">{{ item.sufixo }}</span>
      </span>
      <span class="rotulo">{{ item.rotulo }}</span>
    </li>
  </ul>
</template>

<style scoped>
.painel {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  border-top: 1px solid var(--linha);
  border-left: 1px solid var(--linha);
}

.celula {
  padding: 20px 22px 22px;
  border-right: 1px solid var(--linha);
  border-bottom: 1px solid var(--linha);
  background: var(--papel);
}

.numero {
  display: block;
  font-family: var(--display);
  font-weight: 800;
  font-size: clamp(2.1rem, 5.4vw, 3.1rem);
  line-height: 1;
  letter-spacing: -0.045em;
  color: var(--azul);
}

.sufixo {
  font-size: 0.44em;
  color: var(--ocre);
  margin-left: 3px;
  letter-spacing: 0;
}

.rotulo {
  display: block;
  margin-top: 10px;
  font-size: 0.83rem;
  line-height: 1.45;
  color: var(--tinta-suave);
  max-width: 30ch;
}

@media (max-width: 560px) {
  .painel {
    grid-template-columns: 1fr;
  }
}
</style>

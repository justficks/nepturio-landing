<template>
  <div>
    <p class="text-h5 text-md-h4 text-center pa-0 ma-0 title-custom" style="font-family: 'IBM Plex Mono' !important">
      ПОРТФОЛИО
    </p>
    <p
      class="text-subtitle-2 text-center pa-0 ma-0 mt-2 subtitle-custom mx-4"
      style="font-family: 'IBM Plex Mono' !important"
    >
      Наши последние работы по разработке веб-приложений, сайтов, сервисов и мобильных приложений.
    </p>
    <v-row align="stretch" justify="center" class="mx-4 mt-4">
      <v-col cols="12" xs="12" sm="12" md="4" lg="4" v-for="card in cards" :key="card.id">
        <PortfolioCard
          :id="card.id"
          :title="card.title"
          :description="card.description"
          :img="card.img"
          @handle-click="openPortfolioDialog(card.id, card.title, card.img, card.description)"
        />
      </v-col>
    </v-row>
    <DialogPortfolioCard :dialog="dialog" @close-emit-dialog="closeParentDialog" />
  </div>
</template>

<script setup lang="ts">
import KP from '@/assets/KP.svg'
import NN from '@/assets/NN.svg'
import SSPB from '@/assets/SSPB.svg'
import { ref } from 'vue'
import { usePortfolioStore } from '../../store/portfolio'
import DialogPortfolioCard from './DialogPortfolioCard.vue'
import PortfolioCard from './PortfolioCard.vue'

const { setCurrentPortfolio, closeDialog } = usePortfolioStore()
const dialog = ref(false)

const cards = ref([
  {
    id: 1,
    title: 'ССПБ',
    description:
      'Разработано мобильное приложение под Android, которое соединяется с устройством через Bluetooth. В дальнейшем происходит считывание и обработка данных. Присутствует возможноть отправки команд на устроство. Интерфейс и функционал приложения разделен под разных пользователей с разными уровнем доступа',
    img: SSPB,
  },
  {
    id: 2,
    title: 'НорНикель',
    description:
      'Разработано веб-приложение позволяющее соединяться и считывать данные с прибора через Bluetooth. Полученные данные обрабатываются и анализируются на сервере. Интерфейс приложения включает в себя интерактивную карту с метками объектов организации. Настройка информации об объектах. Функционал приложения разделен под разных пользователей с разным уровнем доступа. Также имеется возможность выгрузки всех данных в excel ',
    img: NN,
  },
  {
    id: 3,
    title: 'КопирТехно',
    description:
      'Разработан сайт-презентация с простым визуальным контентом и описанием всех предоставляемых услуг. Дизайн и цветовая гамма подбирались под запросы заказчика, так как у компании имеются ассициативные цвета',
    img: KP,
  },
])

const openPortfolioDialog = (id: number, title: string, img: string, description: string) => {
  setCurrentPortfolio(id, title, img, description)
  dialog.value = true
}

const closeParentDialog = () => {
  closeDialog()
  dialog.value = false
}
</script>

<style lang="scss" scoped></style>

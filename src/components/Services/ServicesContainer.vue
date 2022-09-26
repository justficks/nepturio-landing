<template>
  <div>
    <p class="text-h5 text-md-h4 text-center pa-0 ma-0 title-custom" style="font-family: 'IBM Plex Mono' !important">
      УСЛУГИ
    </p>
    <p
      class="text-subtitle-2 text-center pa-0 ma-0 mt-2 subtitle-custom mx-4"
      style="font-family: 'IBM Plex Mono' !important"
    >
      Мы сможем помочь Вам с созданием сайта, веб-приложения или разработкой мобильного приложения.
    </p>
    <v-row align="stretch" justify="center" class="mx-4 mt-4">
      <v-col cols="12" xs="12" sm="12" md="6" v-for="card in cards" :key="card.id">
        <ServiceCard :id="card.id" :title="card.title" :img="card.img" :short_description="card.short_description" />
      </v-col>
    </v-row>
  </div>
</template>

<script setup lang="ts">
import DBImg from '@/assets/AdditionalApps.svg'
import MobileImg from '@/assets/MobileApps.svg'
import SiteImg from '@/assets/SitesApps.svg'
import SoftImg from '@/assets/WebApps.svg'
import ServiceCard from '@/components/Services/ServiceCard.vue'
import { ref } from 'vue'

const cards = ref([
  {
    id: 1,
    title: 'Разработка веб-приложений и сайтов',
    short_description:
      'Клиент-серверные приложения (с проектированием базы данных). Веб-приложения разных типов, в том числе возможность работы с приборами, которые имеют Bluetooth, или GSM. Адаптивные, быстрые в работе сайты под любые расширения экрана. Красивый, интуитивно понятный, а главное - продающий дизайн',
    img: SiteImg,
  },
  {
    id: 2,
    title: 'Разработка мобильных приложений',
    short_description:
      'Кроссплатформенные мобильные приложения (Android, iOS) с высокой производительностью и работоспособностью. Нативные мобильные приложения разрабатываются отдельно для каждой ОС (iOS, Android). Веб-приложения, которые могут работать и без подключения к интернету (PWA - прогрессивные веб-приложения, которые по сути являются нативными приложениями внутри браузера)',
    img: MobileImg,
  },
  {
    id: 3,
    title: 'Разработка чат-ботов',
    short_description:
      'Скриптовые и умные чат-боты для разных мессенджеров: Telegram, WhatsApp, VK, а также внедрение в программный продукт',
    img: DBImg,
  },
  {
    id: 4,
    title: 'Хостинг на сервере',
    short_description:
      'Мы предоставляем хостинг на сервере нескольких видов: файловый, виртуальный, который позволит хранить множество веб-сайтов. Ежедневное резервное копирование для обеспечения безопасности и сохранности данных',
    img: SoftImg,
  },
])
</script>

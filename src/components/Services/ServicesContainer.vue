<template>
  <div>
    <p
      class="text-h5 text-md-h4 text-center pa-0 ma-0 title-custom"
      style="font-family: 'IBM Plex Mono' !important"
    >
      УСЛУГИ
    </p>
    <p
      class="text-subtitle-2 text-center pa-0 ma-0 mt-2 subtitle-custom mx-4"
      style="font-family: 'IBM Plex Mono' !important"
    >
      Мы сможем помочь Вам с созданием сайта, веб-приложения или разработкой
      мобильного приложения.
    </p>
    <v-row align="stretch" justify="center" class="mx-4 mt-4">
      <v-col
        cols="12"
        xs="12"
        sm="12"
        md="3"
        v-for="card in cards"
        :key="card.id"
      >
        <ServiceCard
          :id="card.id"
          :title="card.title"
          :img="card.img"
          :description="card.description"
          :short_description="card.short_description"
          @handler-service-card="
            openDialog(card.id, card.title, card.description)
          "
        />
      </v-col>
    </v-row>
    <DialogService :dialog="dialog" @close-emit-dialog="closeEmitDialog" />
  </div>
</template>

<script setup lang="ts">
import DBImg from '@/assets/AdditionalApps.svg';
import MobileImg from '@/assets/MobileApps.svg';
import SiteImg from '@/assets/SitesApps.svg';
import SoftImg from '@/assets/WebApps.svg';
import DialogService from '@/components/Services/DialogService.vue';
import ServiceCard from '@/components/Services/ServiceCard.vue';
import { useServiceStore } from '@/store/service';
import { ref } from 'vue';

const cards = ref([
  {
    id: 1,
    title: 'Разработка программного обеспечения',
    short_description:
      'Пользовательские интерфейсы и полноценное кроссплатформенное программное обеспечение (Web, Desktop, Mobile)',
    description: [
      'Прикладное ПО предназначено для решения конкретной поставленной задачи (локально), используется на персональном компьютере с операционной системой MAC. Windows или Linux ',
    ],
    img: SoftImg,
  },
  {
    id: 2,
    title: 'Разработка мобильных приложений',
    short_description:
      'Кроссплатформенные мобильные приложения (Android, IOS) с высокой производительностью и работоспособностью',
    description: [
      'Нативные мобильные приложения разрабытваются отдельно для каждой ОС (iOS, Android)',
      'Веб-приложения, которые могут работать и без подключения к интернету (PWA-прогрессивные веб-приложения, которые, по сути, являются нативными приложениями внутри браузера)',
      'Кросс-платформенные приложения имеют совместимость с несколькими платформами',
    ],
    img: MobileImg,
  },
  {
    id: 3,
    title: 'Самостоятельная разработка сайтов',
    short_description:
      'Адаптивные, быстрые в работе сайты под любые расширения экрана. Красивый, интуитивно понятный, а главное - продающий дизайн',
    description: [
      'Одностраничный сайт (Landing page)',
      'Сайт-визитка',
      'Клиент-серверное приложение (с проектированием базы данных',
      'Одностраничное интерактивное приложение (SPA)',
      'Многостраничное веб-приложение (MPA)',
      'Возможность работы с данными из прибор, которые имеют (Bluetooth) или (GSM)',
    ],
    img: SiteImg,
  },
  {
    id: 4,
    title: 'Сопутствующие услуги',
    short_description:
      'Услуги, связанные с размещением вашего сайта, ПО и так далее на нашем хостинге',
    description: [
      'Хостинг на собственном сервере',
      'Разработка и внедрение криптообменика',
      'Разработка чат-ботов в Telegram, WhatsApp, VK',
    ],
    img: DBImg,
  },
]);

const { setCurrentService, closeDialog } = useServiceStore();
const dialog = ref(false);

const openDialog = (id: number, title: string, description: string[]) => {
  setCurrentService(id, title, description);
  dialog.value = true;
};

const closeEmitDialog = () => {
  closeDialog();
  dialog.value = false;
};
</script>

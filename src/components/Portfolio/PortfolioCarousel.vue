<template>
  <v-row align="stretch" justify="center" class="mx-4 mt-4">
    <v-carousel height="300" hide-delimiters progress="#4E5CCD">
      <template v-slot:prev="{ props }">
        <v-btn
          variant="plain"
          color="#4E5CCD"
          @click="props.onClick"
          icon="mdi-chevron-left"
        />
      </template>

      <template v-slot:next="{ props }">
        <v-btn
          variant="plain"
          color="#4E5CCD"
          @click="props.onClick"
          icon="mdi-chevron-right"
        />
      </template>

      <v-carousel-item v-for="card in cards" :key="card.title">
        <v-sheet height="100%">
          <div
            class="d-flex justify-center align-center flex-column fill-height py-8 px4"
          >
            <v-img
              :src="card.img"
              :width="$vuetify.display.smAndDown ? 200 : 400"
            />
            <v-btn
              variant="plain"
              color="#4E5CCD"
              @click="
                openOprtfolioDialog(
                  card.id,
                  card.title,
                  card.img,
                  card.description,
                )
              "
            >
              ПОДРОБНЕЕ
            </v-btn>
          </div>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
    <DialogPortfolioCard
      :dialog="dialog"
      @closeEmitDialog="closeParentDialog"
    />
  </v-row>
</template>

<script setup lang="ts">
import KP from '@/assets/KP.svg';
import NN from '@/assets/NN.svg';
import SSPB from '@/assets/SSPB.svg';
import { ref } from 'vue';
import { usePortfolioStore } from '../../store/portfolio';
import DialogPortfolioCard from './DialogPortfolioCard.vue';

const { setCurrentPortfolio, closeDialog } = usePortfolioStore();
const dialog = ref(false);

const openOprtfolioDialog = (
  id: number,
  title: string,
  img: string,
  description: string,
) => {
  setCurrentPortfolio(id, title, img, description);
  dialog.value = true;
};

const closeParentDialog = () => {
  closeDialog();
  dialog.value = false;
};

const cards = ref([
  {
    id: 1,
    title: 'ССПБ',
    description:
      'У заказчика уже имелось разработанное мобильное приложение в виде терминала, но им хотелось полноценной визуализации и обработки цифровых значений в текстовое. Было разработано мобильное приложение для операционной системы Android. Имеется прибор, к которому подключение идет через Bluetooth, функционал приложения имеет возможность считывание и обработку данных, отправление команд, а также разделение на пользователей',
    img: SSPB,
  },
  {
    id: 2,
    title: 'НорНикель',
    description:
      'Разработано веб-приложение и дополнительный модуль, который позволяет прибору напрямую подключаться к устройству с помощью Bluetooth. С прибора считываются данные, обрабатываются и отправляются на сервер. Имеется интерактивная карта, на которой метками обозначены все объекты с данными по ним, все объекты разделены на пользователей. Также имеется возможность выгрузки всех данных в excel ',
    img: NN,
  },
  {
    id: 3,
    title: 'КопирТехно',
    description:
      'Разработан сайт-визитка, с простым визуальным контентом и описанием всех предоставляемых услуг. Дизайн и цветовая гамма подбирались под запросы заказчика, так как у компании имеются ассициативные цвета',
    img: KP,
  },
]);
</script>

<style scoped></style>

<template>
  <v-container fluid>
    <v-select
      v-model="selectedLanguage"
      :items="showLocales"
      label="Select Language"
    >
      <template v-slot:selection="{ item }">
        {{item.name}}
      </template>
      <template v-slot:item="{ item }">
        <NuxtLink :to="switchLocalePath(item.code)">{{item.name}}</NuxtLink>
      </template>
    </v-select>
  </v-container>
</template>

<script lang="ts">
import {computed, ComputedRef, defineComponent, WritableComputedRef} from '@nuxtjs/composition-api';
import {IVueI18nNuxt} from '@nuxtjs/i18n';

export default defineComponent({
  setup() {
    const showLocales: ComputedRef<IVueI18nNuxt.locales> = computed(() => this.$i18n.locale);
    const selectedLanguage: WritableComputedRef<string> = computed({
      get(): string {
        return this.$i18n.locale;
      },
      set(newValue: string): void {
        this.$i18n.locale = newValue;
      },
    });

    return {
      showLocales,
      selectedLanguage
    };
  },
});
</script>

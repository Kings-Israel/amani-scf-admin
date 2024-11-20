<template>
  
      <VCardText class="d-flex flex-wrap py-4 gap-4">
        <div class="d-flex flex-wrap gap-4 mx-5">
          <div class="d-flex align-center">
            <!-- 👉 Search  -->
            <AppTextField
              v-model="searchQuery"
              :append-inner-icon="marker ? 'tabler-search' : 'tabler-map-pin-off'"
              class="me-3"
              clear-icon="tabler-circle-x"
              clearable
              color="primary"
              placeholder="Search"
              style="inline-size: 200px;"
              type="text"
              @click:append-inner="toggleMarker"
              @click:append="sendMessage"
            />
            <AppSelect
              v-model="selectedStatus"
              :items="status"
              class="me-3"
              clear-icon="tabler-x"
              clearable
              placeholder="Status"
              style="inline-size: 200px;"
            />
            <AppTextField
              v-model="searchQuery"
              :append-inner-icon="marker ? 'tabler-calendar' : 'tabler-map-pin-off'"
              class="me-3"
              clear-icon="tabler-circle-x"
              clearable
              color="primary"
              placeholder="Date"
              style="inline-size: 200px;"
              type="text"
              @click:append-inner="toggleMarker"
              @click:append="sendMessage"
            />
          </div>

          <VSpacer />
          <div class="d-flex gap-4 flex-wrap align-center">
            <AppSelect
              v-model="itemsPerPage"
              :items="[5, 10, 20, 25, 50]"
            />
            <!-- 👉 Export button -->
            <VBtn
              color="primary"
              prepend-icon="tabler-download"
              style=" text-size-adjust: auto;text-transform: none;"
            />
          </div>
          <!-- 👉 Add user button -->
          <VBtn
            prepend-icon="tabler-plus"
            @click="isAddNewExpenseDataVisible = true"
          >
            Request Expense
          </VBtn>
          <VBtn
            prepend-icon="tabler-plus"
            @click="isAddNewReimbursementDataVisible = true"
          >
            Request Reimbursement
          </VBtn>
          <VBtn
            :disabled="isVisibleButton"
            prepend-icon="tabler-list-check"
            @click="approve"
          >
            Approve
          </VBtn>
        </div>
      </VCardText>
</template>

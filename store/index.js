export const state = () => ({
  frontState: "default"
})

export const mutations = {
  UPDATE(state, value) {
    state.frontState = value;
  }
}

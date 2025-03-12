export interface PokemonList {
  name: string
  url: string
}

export interface Pokemon {
  id: number
  name: string
  base_experience: number
  height: number
  is_default: boolean
  order: number
  weight: number
  abilities: Array<PokemonAbility>
  forms: Array<Form>
  game_indices: Array<number>
  location_area_encounters: string
  moves: Array<Move>
  past_types: Array<PokemonTypePast>
  sprites: PokemonSprites
  cries: PokemonCries
  species: NamedAPIResource
  stats: Array<PokemonStat>
  types: Array<PokemonType>
}

export interface PokemonAbility {
  is_hidden: boolean
  slot: number
  ability: NamedAPIResource
}

export interface PokemonStat {
  stat: Stat
  effort: number
  base_stat: number
}

export interface PokemonCries {
  latest: string
  legacy: string
}

export interface PokemonTypePast {
  generation: Generation
  types: Array<PokemonType>
}

export interface PokemonSprites {
  front_default: string
  front_shiny: string
  back_default: string
  back_shiny: string
  front_female: string
  front_shiny_female: string
  back_female: string
  back_shiny_female: string
}

export interface Form {
  id: number
  name: string
  order: number
  form_order: number
  is_default: boolean
  is_battle_only: boolean
  is_mega: boolean
  form_name: string
  pokemon: Pokemon
  types: Array<PokemonFormType>
  sprites: Array<PokemonFormSprites>
  version_group: VersionGroup
  names: Array<Name>
  form_names: Array<Name>
}

export interface PokemonForm {
  id: number
  name: string
  order: number
  form_order: number
  is_default: boolean
  is_battle_only: boolean
  is_mega: boolean
  form_name: string
  pokemon: Pokemon
  types: Array<PokemonFormType>
  sprites: PokemonFormSprites
  version_group: VersionGroup
  names: Array<Name>
  form_names: Array<Name>
}

export interface PokemonFormSprites {
  front_default: string
  front_shiny: string
  back_default: string
  back_shiny: string
}

export interface PokemonFormType {
  slot: number
  type: Type
}

export interface PokemonType {
  slot: number
  type: Type
}

export interface Type {
  id: number
  name: string
  damage_relations: TypeRelations
  past_damage_relations: Array<Type>
  game_indices: Array<Type>
  generation: NamedAPIResource
  move_damage_class: NamedAPIResource
  names: Array<Name>
  pokemon: Array<TypePokemon>
  moves: NamedAPIResource
}

export interface TypePokemon {
  slot: number
  pokemon: NamedAPIResource
}

export interface TypeRelationsPast {
  generate: Generation
  damage_relations: TypeRelations
}

export interface Generation {
  id: number
  name: string
  abilities: Array<Ability>
  names: Array<Name>
  main_region: Region
  moves: Array<Move>
  pokemon_species: Array<PokemonSpecies>
  types: Array<Type>
  version_groups: Array<VersionGroup>
}

export interface Ability {
  id: number
  name: string
  is_main_series: boolean
  generation: Generation
  names: Array<Name>
  effect_entries: Array<VerboseEffect>
  effect_changes: Array<AbilityEffectChange>
  flavor_text_entries: Array<AbilityFlavorText>
  pokemon: Array<AbilityPokemon>
}

export interface AbilityPokemon {
  is_hidden: boolean
  slot: number
  pokemon: Pokemon
}

export interface AbilityFlavorText {
  flavor_text: string
  language: Language
  version_group: VersionGroup
}

export interface AbilityEffectChange {
  effect_entries: Array<Effect>
  version_group: VersionGroup
}

export interface Pokedex {
  id: number
  name: string
  is_default: boolean
  descriptions: Array<Description>
  names: Array<Name>
  pokemon_entries: Array<PokemonEntry>
  region: Region
  version_groups: Array<VersionGroup>
}

export interface PokemonEntry {
  entry_number: number
  pokemon_species: PokemonSpecies
}

export interface Move {
  id: number
  name: string
  accuracy: number
  effect_change: number
  pp: number
  priority: number
  power: number
  context_combos: ContestComboSets
  contest_type: ContestType
  contest_effect: ContestEffect
  damage_class: MoveDamageClass
  effect_entries: VerboseEffect
  effect_changes: AbilityEFfectChange
  learned_by_pokemon: Array<Pokemon>
  flavor_text_entries: Array<MoveFlavorText>
  generation: Generation
  machines: Array<MachineVersionDetail>
  meta: MoveMetaData
  names: Array<Name>
  past_values: Array<PastMoveStatsValues>
  stat_changes: Array<MoveStatChange>
  super_contest_effect: SuperContestEffect
  target: MoveTarget
  type: Type
}

export interface SuperContestEffect {
  id: number
  appeal: number
  flavor_text_entries: Array<FlavorText>
  moves: Array<Move>
}

export interface MoveStatChange {
  change: number
  stat: Stat
}

export interface MoveStateChange {
  change: number
  stat: Stat
}

export interface Stat {
  id: number
  name: string
  game_index: number
  is_battle_only: boolean
  affecting_moves: MoveStatAffectSets
  affecting_natures: NatureStatAffectSets
  characteristics: Array<Characteristic>
  move_damage_class: MoveDamageClass
  names: Array<Name>
}

export interface NatureStatAffectSets {
  increase: Array<Nature>
  decrease: Array<Nature>
}

export interface Characteristic {
  id: number
  gene_modulo: number
  possible_values: Array<number>
  highest_stat: Stat
  descriptions: Array<Description>
}

export interface Nature {
  id: number
  name: string
  decreased_stat: Stat
  increased_stat: Stat
  hates_flavor: BerryFlavor
  likes_flavor: BerryFlavor
  pokeathlon_stat_changes: Array<NatureStatChange>
  move_battle_style_preferences: Array<MoveBattleStylePreference>
  names: Array<Name>
}

export interface MoveBattleStylePreference {
  low_hp_preference: number
  high_hp_preference: number
  move_battle_style: MoveBattleStyle
}

export interface MoveBattleStyle {
  id: number
  name: string
  names: Array<Name>
}

export interface NatureStatChange {
  max_change: number
  pokeathlon_stat: PokeathlonStat
}

export interface PokeathlonStat {
  id: number
  name: string
  names: Array<Name>
  affecting_natures: NaturePokeathlonStatAffectSets
}
export interface NaturePokeathlonStatAffectSets {
  increase: Array<Nature>
  decrease: Array<Nature>
}
export interface MoveStatAffectSets {
  increase: MoveStatAffect
  decrease: MoveStatAffect
}

export interface MoveStatAffect {
  change: number
  move: Move
}

export interface PastMoveStatsValues {
  accuracy: number
  effect_chance: number
  power: number
  pp: number
  effect_entries: Array<VerboseEffect>
  type: Type
  version_group: VersionGroup
}

export interface MoveMetaData {
  ailment: MoveAilment
  category: MoveCategory
  min_hits: number
  max_hits: number
  min_turns: number
  max_turns: number
  drain: number
  healing: number
  crit_rate: number
  ailment_chance: number
  flinch_chance: number
  stat_chance: number
}

export interface MoveCategory {
  id: number
  name: string
  moves: Array<Move>
  description: Array<Description>
}

export interface MoveAilment {
  id: number
  name: string
  moves: Array<Move>
  names: Array<Name>
}

export interface MoveFlavorText {
  flavor_text: string
  language: Language
  version_group: VersionGroup
}

export interface AbilityEFfectChange {
  effect_entries: Array<Effect>
  version_group: VersionGroup
}

export interface MoveDamageClass {
  id: number
  name: string
  descriptions: Array<Description>
  moves: Array<Move>
  names: Array<Name>
}

export interface ContestEffect {
  id: number
  appeal: number
  jam: number
  effect_entries: Array<Effect>
  flavor_text_entries: Array<FlavorText>
}

export interface ContestType {
  id: number
  name: string
  berry_flavor: BerryFlavor
  names: Array<ContestName>
}

export interface BerryFlavor {
  id: number
  name: string
  berries: Array<FlavorBerryMap>
  contest_type: ContestType
  names: Array<Name>
}

export interface FlavorBerryMap {
  potency: number
  berry: Berry
}

export interface Berry {
  id: number
  name: string
  growth_time: number
  max_harvest: number
  natural_gift_power: number
  size: number
  smoothness: number
  soil_dryness: number
  firmness: BerryFirmness
  flavors: Array<BerryFlavorMap>
  item: Item
  natural_gift_type: Type
}

export interface Item {
  id: number
  name: string
  cost: number
  fling_power: number
  fling_effect: ItemFlingEffect
  attributes: Array<ItemAttribute>
  category: ItemCategory
  effect_entries: Array<VerboseEffect>
  flavor_text_entries: Array<VersionGroupFlavorText>
  game_indices: Array<GenerationGameIndex>
  names: Array<Name>
  sprites: ItemSprites
  held_by_pokemon: Array<ItemHolderPokemon>
  baby_trigger_for: EvolutionChain
  machines: Array<MachineVersionDetail>
}

export interface MachineVersionDetail {
  machine: Machine
  version_group: VersionGroup
}

export interface Machine {
  id: number
  item: Item
  move: Move
  version_group: VersionGroup
}

export interface EvolutionChain {
  id: number
  baby_trigger_item: Item
  chain: ChainLink
}

export interface ChainLink {
  is_baby: boolean
  species: NamedAPIResource
  evolution_details: Array<EvolutionDetail>
  evolves_to: Array<ChainLink>
}

export interface EvolutionDetail {
  item: Item
  trigger: EvolutionTrigger
  gender: string
  held_item: Item
  known_move: Move
  known_move_type: Type
  location: Location
  min_level: number
  min_happiness: number
  min_beauty: number
  min_affection: number
  needs_overworld_rain: boolean
  party_species: PokemonSpecies
  party_type: Type
  relative_physical_stats: number
  time_of_play: string
  trade_species: PokemonSpecies
  turn_upside_down: boolean
}

export interface EvolutionTrigger {
  id: number
  name: string
  names: Array<Name>
  pokemon_species: Array<PokemonSpecies>
}

export interface NamedAPIResource {
  name: string
  url: string
}

export interface PokemonSpecies {
  id: number
  name: string
  order: number
  gender_rate: number
  capture_rate: number
  base_happiness: number
  is_baby: boolean
  is_legendary: boolean
  is_mythical: boolean
  hatch_counter: number
  has_gender_differences: boolean
  forms_switchable: boolean
  growth_rate: GrowthRate
  pokedex: Array<PokemonSpeciesDexEntry>
  egg_groups: Array<EggGroup>
  color: PokemonColor
  shape: PokemonShape
  evolves_from_species: PokemonSpecies
  evolution_chain: NamedAPIResource
  habitat: PokemonHabitat
  generation: Generation
  names: Array<Name>
  pal_park_encounters: Array<PalParkEncounterArea>
  flavor_text_entries: Array<FlavorText>
  form_descriptions: Array<Description>
  genera: Array<Genus>
  varieties: Array<PokemonSpeciesVariety>
}

export interface PalParkEncounterArea {
  base_score: number
  rate: number
  area: PalParkArea
}

export interface GrowthRate {
  id: number
  name: string
  formula: string
  descriptions: Array<Description>
  levels: Array<GrowthRateExperienceLevel>
  pokemon_species: Array<PokemonSpecies>
}

export interface GrowthRateExperienceLevel {
  level: number
  experience: number
}

export interface PokemonSpeciesDexEntry {
  entry_number: number
  pokedex: Pokedex
}

export interface PokemonShape {
  id: number
  name: string
  awesome_names: Array<AwesomeName>
  names: Array<Name>
  pokemon_species: Array<PokemonSpecies>
}

export interface PokemonColor {
  id: number
  name: string
  names: Array<Name>
  pokemon_species: Array<PokemonSpecies>
}

export interface EggGroup {
  id: number
  name: string
  names: Array<Name>
  pokemon_species: Array<PokemonSpecies>
}

export interface AwesomeName {
  awesome_name: string
  language: Language
}

export interface PokemonHabitat {
  id: number
  name: string
  names: Array<Name>
  pokemon_species: PokemonSpecies
}

export interface PalParkArea {
  id: number
  name: string
  names: Array<Name>
  pokemon_encounters: Array<PalParkEncounterSpecies>
}

export interface PalParkEncounterSpecies {
  base_score: number
  rate: number
  pokemon_species: PokemonSpecies
}

export interface FlavorText {
  flavor_text: string
  language: Language
  version: Version
}

export interface PokemonSpeciesVariety {
  is_default: boolean
  pokemon: NamedAPIResource
}

export interface Genus {
  genus: string
  language: Language
}

export interface VersionGroupFlavorText {
  text: string
  language: Language
  version_group: VersionGroup
}

export interface ItemHolderPokemon {
  pokemon: Pokemon
  version_details: Array<ItemHolderPokemonVersionDetail>
}

export interface ItemHolderPokemonVersionDetail {
  rarity: number
  version: Version
}

export interface ItemSprites {
  default: string
}

export interface GenerationGameIndex {
  game_index: number
  generation: Generation
}

export interface ItemAttribute {
  id: number
  name: string
  Items: Array<Item>
  names: Array<Name>
  descriptions: Array<Description>
}

export interface ItemCategory {
  id: number
  name: string
  items: Array<Item>
  names: Array<Name>
}

export interface ItemPocket {
  id: number
  name: string
  categories: Array<ItemCategory>
  names: Array<Name>
}

export interface VerboseEffect {
  effect: string
  short_effect: string
  language: Language
}

export interface VersionGroupFlavorText {
  text: string
  language: Language
  version_group: VersionGroup
}

export interface VersionGroup {
  id: number
  name: string
  order: number
  generation: Generation
  move_learn_methods: Array<MoveLearnMethod>
  pokedexes: Array<Pokedex>
  regions: Array<Region>
  version: Array<Version>
}

export interface MoveLearnMethod {
  id: number
  name: string
  description: Array<Description>
  names: Array<Name>
  version_groups: Array<VersionGroup>
}

export interface Version {
  id: number
  name: string
  names: Array<Name>
  version_groups: Array<VersionGroup>
}

export interface ItemFlingEffect {
  id: number
  name: string
  effect_entries: Array<Effect>
  items: Array<Item>
}

export interface Effect {
  effect: string
  language: Language
}

export interface BerryFirmness {
  id: number
  name: string
  berries: Array<Berry>
  names: Array<Name>
}

export interface BerryFlavorMap {
  potency: number
  flavor: BerryFlavor
}

export interface ContestName {
  name: string
  color: string
  language: Language
}

export interface ContestComboSets {
  normal: ContestComboDetail
  super: ContestComboDetail
}

export interface ContestComboDetail {
  use_before: Array<Move>
  use_after: Array<Move>
}

export interface MoveTarget {
  id: number
  name: string
  descriptions: Array<Description>
  moves: Array<Move>
  names: Array<Name>
}

export interface Description {
  description: string
  language: Language
}

export interface Region {
  id: number
  locations: Array<Location>
  name: string
  names: Array<Name>
  main_generation: Generation
  version_groups: Array<VersionGroup>
  pokedexes: Array<Pokedex>
}

export interface Name {
  name: string
  language: Language
}

export interface Language {
  id: number
  name: string
  official: boolean
  iso639: string
  iso3166: string
  names: Array<Name>
}

export interface TypeRelations {
  no_damage_to: Array<Type>
  no_damage_from: Array<Type>
  double_damage_to: Array<Type>
  double_damage_from: Array<Type>
  half_damage_to: Array<Type>
}

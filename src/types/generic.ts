
export interface Clouds {
  all?: Number,
  visibility?: Number,
  humidity?: Number
}

export interface Coordinates {
  lon?: Number,
  lat?: Number
}

export interface Summary {
  title?: String,
  description?: String,
  icon?: String
}

export interface Temperature {
  actual: Number,
  feelsLike?: Number,
  min?: Number,
  max?: Number
}

export interface Weather {
  summary?: Summary,
  temperature: Temperature,
  wind?: Wind,
  clouds?: Clouds,
  timestamp?: Number
}

export interface Wind {
  speed?: Number,
  deg?: Number
}

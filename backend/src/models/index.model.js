import Groups from "./groups.model.js";
import PlantType from "./plantType.model.js";
import Species from "./species.model.js";
import Images from "./images.model.js";
import SpeciesNames from "./speciesNames.model.js";
import Properties from "./properties.model.js";
import EnumProperties from "./enumProperties.model.js";
import PropertiesValue from "./propertiesValue.model.js";

// Groups 1-n PlantType
PlantType.belongsTo(Groups, {
    foreignKey: "group_id",
    targetKey: "id",
    onDelete: "RESTRICT"
});

Groups.hasMany(PlantType, {
    foreignKey: "group_id",
    sourceKey: "id"
});

// PlantType 1-n Species
Species.belongsTo(PlantType, {
    foreignKey: "type_id",
    targetKey: "id",
    onDelete: "RESTRICT"
});

PlantType.hasMany(Species, {
    foreignKey: "type_id",
    sourceKey: "id"
})

// PlantType 1-n Properties
Properties.belongsTo(PlantType, {
    foreignKey: "type_id",
    targetKey: "id",
    onDelete: "CASCADE"
});

PlantType.hasMany(Properties, {
    foreignKey: "type_id",
    sourceKey: "id"
})

// Properties 1-n EnumProperties
EnumProperties.belongsTo(Properties, {
    foreignKey: "properties_id",
    targetKey: "id",
    onDelete: "CASCADE"
});

Properties.hasMany(EnumProperties, {
    foreignKey: "properties_id",
    sourceKey: "id"
})

// Species 1-n Images
Images.belongsTo(Species, {
    foreignKey: "species_id",
    targetKey: "id",
    onDelete: "CASCADE"
})

Species.hasMany(Images, {
    foreignKey: "species_id",
    sourceKey: "id"
})

// Species 1-n SpeciesNames
SpeciesNames.belongsTo(Species, {
    foreignKey: "species_id",
    targetKey: "id",
    onDelete: "CASCADE"
})

Species.hasMany(SpeciesNames, {
    foreignKey: "species_id",
    sourceKey: "id"
})

// Species 1-n PropertiesValue
PropertiesValue.belongsTo(Species, {
    foreignKey: "species_id",
    targetKey: "id",
    onDelete: "CASCADE"
})

Species.hasMany(PropertiesValue, {
    foreignKey: "species_id",
    sourceKey: "id"
})

// Properties 1-n PropertiesValue
PropertiesValue.belongsTo(Properties, {
    foreignKey: "properties_id",
    targetKey: "id",
    onDelete: "CASCADE"
})

Properties.hasMany(PropertiesValue, {
    foreignKey: "properties_id",
    sourceKey: "id"
})

// EnumProperties 1-n PropertiesValue
PropertiesValue.belongsTo(EnumProperties, {
    foreignKey: "enum_properties_id",
    targetKey: "id",
    onDelete: "CASCADE"
})

EnumProperties.hasMany(PropertiesValue, {
    foreignKey: "enum_properties_id",
    sourceKey: "id"
})

export {Groups, PlantType, Species, Images, SpeciesNames, Properties, EnumProperties, PropertiesValue };
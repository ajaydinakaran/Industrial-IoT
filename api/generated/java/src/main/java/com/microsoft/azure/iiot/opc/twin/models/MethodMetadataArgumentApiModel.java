/**
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator 1.0.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

package com.microsoft.azure.iiot.opc.twin.models;

import java.util.List;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Method argument metadata model.
 */
public class MethodMetadataArgumentApiModel {
    /**
     * Argument name.
     */
    @JsonProperty(value = "name")
    private String name;

    /**
     * Optional description.
     */
    @JsonProperty(value = "description")
    private String description;

    /**
     * The type property.
     */
    @JsonProperty(value = "type")
    private NodeApiModel type;

    /**
     * Default value.
     */
    @JsonProperty(value = "defaultValue")
    private Object defaultValue;

    /**
     * Possible values include: 'OneOrMoreDimensions', 'OneDimension',
     * 'TwoDimensions', 'ScalarOrOneDimension', 'Any', 'Scalar'.
     */
    @JsonProperty(value = "valueRank")
    private NodeValueRank valueRank;

    /**
     * Optional, array dimension.
     */
    @JsonProperty(value = "arrayDimensions")
    private List<Integer> arrayDimensions;

    /**
     * Get argument name.
     *
     * @return the name value
     */
    public String name() {
        return this.name;
    }

    /**
     * Set argument name.
     *
     * @param name the name value to set
     * @return the MethodMetadataArgumentApiModel object itself.
     */
    public MethodMetadataArgumentApiModel withName(String name) {
        this.name = name;
        return this;
    }

    /**
     * Get optional description.
     *
     * @return the description value
     */
    public String description() {
        return this.description;
    }

    /**
     * Set optional description.
     *
     * @param description the description value to set
     * @return the MethodMetadataArgumentApiModel object itself.
     */
    public MethodMetadataArgumentApiModel withDescription(String description) {
        this.description = description;
        return this;
    }

    /**
     * Get the type value.
     *
     * @return the type value
     */
    public NodeApiModel type() {
        return this.type;
    }

    /**
     * Set the type value.
     *
     * @param type the type value to set
     * @return the MethodMetadataArgumentApiModel object itself.
     */
    public MethodMetadataArgumentApiModel withType(NodeApiModel type) {
        this.type = type;
        return this;
    }

    /**
     * Get default value.
     *
     * @return the defaultValue value
     */
    public Object defaultValue() {
        return this.defaultValue;
    }

    /**
     * Set default value.
     *
     * @param defaultValue the defaultValue value to set
     * @return the MethodMetadataArgumentApiModel object itself.
     */
    public MethodMetadataArgumentApiModel withDefaultValue(Object defaultValue) {
        this.defaultValue = defaultValue;
        return this;
    }

    /**
     * Get possible values include: 'OneOrMoreDimensions', 'OneDimension', 'TwoDimensions', 'ScalarOrOneDimension', 'Any', 'Scalar'.
     *
     * @return the valueRank value
     */
    public NodeValueRank valueRank() {
        return this.valueRank;
    }

    /**
     * Set possible values include: 'OneOrMoreDimensions', 'OneDimension', 'TwoDimensions', 'ScalarOrOneDimension', 'Any', 'Scalar'.
     *
     * @param valueRank the valueRank value to set
     * @return the MethodMetadataArgumentApiModel object itself.
     */
    public MethodMetadataArgumentApiModel withValueRank(NodeValueRank valueRank) {
        this.valueRank = valueRank;
        return this;
    }

    /**
     * Get optional, array dimension.
     *
     * @return the arrayDimensions value
     */
    public List<Integer> arrayDimensions() {
        return this.arrayDimensions;
    }

    /**
     * Set optional, array dimension.
     *
     * @param arrayDimensions the arrayDimensions value to set
     * @return the MethodMetadataArgumentApiModel object itself.
     */
    public MethodMetadataArgumentApiModel withArrayDimensions(List<Integer> arrayDimensions) {
        this.arrayDimensions = arrayDimensions;
        return this;
    }

}
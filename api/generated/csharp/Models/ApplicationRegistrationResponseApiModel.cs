// <auto-generated>
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License. See License.txt in the project root for
// license information.
//
// Code generated by Microsoft (R) AutoRest Code Generator 1.0.0.0
// Changes may cause incorrect behavior and will be lost if the code is
// regenerated.
// </auto-generated>

namespace Microsoft.Azure.IIoT.Opc.Registry.Models
{
    using Newtonsoft.Json;
    using System.Linq;

    /// <summary>
    /// Result of an application registration
    /// </summary>
    public partial class ApplicationRegistrationResponseApiModel
    {
        /// <summary>
        /// Initializes a new instance of the
        /// ApplicationRegistrationResponseApiModel class.
        /// </summary>
        public ApplicationRegistrationResponseApiModel()
        {
            CustomInit();
        }

        /// <summary>
        /// Initializes a new instance of the
        /// ApplicationRegistrationResponseApiModel class.
        /// </summary>
        /// <param name="id">New id application was registered under</param>
        public ApplicationRegistrationResponseApiModel(string id = default(string))
        {
            Id = id;
            CustomInit();
        }

        /// <summary>
        /// An initialization method that performs custom operations like setting defaults
        /// </summary>
        partial void CustomInit();

        /// <summary>
        /// Gets or sets new id application was registered under
        /// </summary>
        [JsonProperty(PropertyName = "id")]
        public string Id { get; set; }

    }
}
import React from 'react'
import Label from '../../../../components/form/Label'
import FileInput from '../../../../components/form/input/FileInput'
import Input from '../../../../components/form/input/InputField'
import Dropdown from '../../../../components/form/input/Dropdown'

const ProductDetailModal = () => {
  return (
    <>
        <div className="space-y-4">
                <Label
                  htmlFor="AddImage"
                  children="Add Image (Upload or Drag drop)"
                />
                <FileInput onChange={() => {}} />

                <div className="flex gap-2">
                  <div className="w-full">
                    <Label htmlFor="name" children="Name" />
                    <Input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Name"
                      className="w-full"
                    />
                  </div>
                  <div className="w-full">
                    <Label htmlFor="brand" children="Brand" />
                    <Dropdown
                      id="brand-select"
                      name="brand-select"
                      className="w-full"
                      options={[
                        { value: "", label: "Select" },
                        { value: "brand1", label: "Brand 1" },
                        { value: "brand2", label: "Brand 2" },
                      ]}
                    />
                  </div>
                </div>

                <div className="flex gap-2">
                  <div className="w-full">
                    <Label htmlFor="article" children="Article Number" />
                    <Input
                      type="text"
                      id="article"
                      placeholder="e.g., SKU4743"
                    />
                  </div>
                  <div className="w-full">
                    <Label htmlFor="Type" children="Type" />
                    <Dropdown
                      id="product-select"
                      name="product-type"
                      options={[
                        { value: "", label: "Select Product Category" },
                        { value: "type1", label: "Type 1" },
                        { value: "type2", label: "Type 2" },
                      ]}
                    />
                  </div>
                </div>

                <div className="flex flex-col">
                  <Label htmlFor="ExpiryDate" children="Expiry Date" />
                  <Input type="date" id="ExpiryDate" />
                </div>

                <div className="flex gap-2">
                  <div className="w-full">
                    <Label htmlFor="size" children="Pack Size" />
                    <Dropdown
                      id="pack-size"
                      name="pack-size"
                      options={[
                        { value: "", label: "Select" },
                        { value: "small", label: "Small" },
                        { value: "large", label: "Large" },
                      ]}
                    />
                  </div>
                  <div className="w-full">
                    <Label htmlFor="life" children="Shelf Life" />
                    <Dropdown
                      id="shelf-life"
                      name="shelf-life"
                      options={[
                        { value: "", label: "Months" },
                        { value: "6", label: "6 Months" },
                        { value: "12", label: "12 Months" },
                      ]}
                    />
                  </div>
                </div>
                </div>
    </>
  )
}

export default ProductDetailModal
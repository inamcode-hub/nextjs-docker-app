import PageTemplate from "@/components/PageTemplate";

export default function DryerManufacturers() {
  return (
    <PageTemplate 
      title="Dryer Manufacturers" 
      description="Partner with leading dryer manufacturers worldwide."
    >
      <div className="card">
        <div className="card-body">
          <h3 className="card-title">Manufacturing Partners</h3>
          <p className="card-text">
            We work closely with leading dryer manufacturers to integrate our moisture 
            monitoring solutions into their equipment. Our partnerships ensure seamless 
            compatibility and optimal performance.
          </p>
        </div>
      </div>
    </PageTemplate>
  );
}
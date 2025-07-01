# Customer Experience Bug Fix List

## 1. NextJS Error
- ❌ Route error: `params.slug` needs to be awaited in dynamic routes

## 2. Missing Q&A Data Issues

### Greg (Ontario)
- ❌ Missing Q&A: "Is there anything you would like to see improved in the Dryer Master?"
- ❌ Missing Answer: "There are read outs for inlet grain temp, outlet grain temp, and plenum temp, but not for grain temp (in the column).We have to go outside to the dryer panel to view this."
- ❌ Missing DM Comment section

### Lowell (Minnesota)
- ❌ Missing Q&A: "How does the Dryer Master change the way you dry?"
- ❌ Missing Answer: "I can go do other work and not worry about the dryer adjustments."
- ❌ Missing Q&A: "Have you contacted the Dryer Master Support Centre? What was your experience?"
- ❌ Missing Answer: "Great service."

## 3. Image Issues

### Lowell (Minnesota)
- ❌ Images are repeated (showing same image multiple times)

### Richard (South Dakota) 
- ❌ Last image is not his (belongs to someone else)

### Mark (Indiana)
- ❌ Has duplicate images (same image shown twice)

### Chris (Illinois)
- ❌ Only has 2 images but showing 3 (one is duplicate)

### Trevor (North Dakota)
- ❌ Has 4 images in data but only 1 actual image available

### Brian (Indiana)
- ❌ Missing new images: "brain in indiana new shut.jpg" and other "new" variants

### Aaron (Illinois)
- ❌ Has 3 images but only 2 match, 3rd is repeat of first

### Ryan (Ontario)
- ❌ First image repeated twice, has 4 images instead of 3

### Kevin (Indiana)
- ❌ Both images are wrong/don't match customer

### Larry (Ontario)
- ❌ Has 1 image but showing 3 (duplicates)

### Anthony (Ohio)
- ❌ First image repeated twice, showing 4 instead of 3

## 4. Missing Images from Source
Need to copy additional images:
- brain in indiana new shut.jpg
- Other "new" variants for customers

## Actions Required:
1. Fix NextJS async params issue
2. Add missing Q&A data to schema
3. Fix all image duplications and mismatches
4. Copy missing images from source folder
5. Clean up image folder
6. Verify all customer image counts match data
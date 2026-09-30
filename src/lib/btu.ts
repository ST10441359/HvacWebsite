export type RoomType = 'Bedroom' | 'Living Room' | 'Kitchen' | 'Office';

export interface BtuInput {
  roomSize: number;
  occupants: number;
  roomType: RoomType;
}

export interface BtuResult {
  minBtu: number;
  maxBtu: number;
  recommendedBtu: number;
}

const BASE_BTU_PER_M2 = 600;
const OCCUPANT_BTU = 400;

const ROOM_MULTIPLIER: Record<RoomType, number> = {
  'Bedroom': 1.00,
  'Living Room': 1.10,
  'Kitchen': 1.30,
  'Office': 1.15,
};

export function calculateBtu(input: BtuInput): BtuResult {
  const { roomSize, occupants, roomType } = input;

  const base = roomSize * BASE_BTU_PER_M2;
  const occupantsLoad = Math.max(0, occupants - 2) * OCCUPANT_BTU;
  const subtotal = base + occupantsLoad;
  const total = subtotal * ROOM_MULTIPLIER[roomType];

  // Round to nearest 500
  const recommended = Math.round(total / 500) * 500;

  return {
    minBtu: Math.round((recommended * 0.85) / 500) * 500,
    maxBtu: Math.round((recommended * 1.15) / 500) * 500,
    recommendedBtu: recommended,
  };
}

export function findMatchingProducts(
  result: BtuResult,
  products: { btu: number }[]
): number[] {
  // Wide range so we always return something for the real 12k–60k catalogue
  const low = result.recommendedBtu * 0.5;
  const high = result.recommendedBtu * 2.0;

  const matches = products
    .map((p, i) => ({ i, btu: p.btu }))
    .filter(p => p.btu >= low && p.btu <= high)
    .map(p => p.i);

  // Fallback: if nothing matched, return the single closest product
  if (matches.length === 0 && products.length > 0) {
    let closest = 0;
    let smallestDiff = Infinity;
    products.forEach((p, i) => {
      const diff = Math.abs(p.btu - result.recommendedBtu);
      if (diff < smallestDiff) {
        smallestDiff = diff;
        closest = i;
      }
    });
    return [closest];
  }

  return matches;
}
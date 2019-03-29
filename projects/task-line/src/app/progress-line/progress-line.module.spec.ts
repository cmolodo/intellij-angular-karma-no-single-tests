import { ProgressLineModule } from "./progress-line.module";

describe("ProgressLineModule", () => {
  let progressLineModule: ProgressLineModule;

  beforeEach(() => {
    progressLineModule = new ProgressLineModule();
  });

  it("should create an instance", () => {
    expect(progressLineModule).toBeTruthy();
  });
});
